import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { get, set, isEmpty, forEach } from 'lodash';
import { Favorite, FavoriteService, LineItemService, ItemGroup, User, UserService, FavoriteScope } from '@congacommerce/ecommerce';
import { ExceptionService } from '@congacommerce/elements';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteDetailComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute,
    private favoriteService: FavoriteService,
    private userService: UserService,
    private exceptionService: ExceptionService) { }

  favorite$: BehaviorSubject<Favorite> = new BehaviorSubject<Favorite>(null);

  lineItems$: BehaviorSubject<Array<ItemGroup>> = new BehaviorSubject<Array<ItemGroup>>(null);

  user$: Observable<User>;

  subscriptions: Array<Subscription> = new Array();

  isLoading: boolean = false;

  favoriteScopes = [FavoriteScope.Private, FavoriteScope.Public];

  private favoriteLookups = `PriceListId,ConfigurationId,CreatedById`;

  ngOnInit() {
    this.user$ = this.userService.getCurrentUser();
    this.getFavorite();
  }

  private getFavorite() {
    this.subscriptions.push(this.activatedRoute.params.pipe(
      filter(params => get(params, 'id') != null),
      map(params => get(params, 'id')),
      switchMap(favoriteId => this.favoriteService.getFavoriteById(favoriteId, this.favoriteLookups)),
      switchMap(res => {
        this.getFavoriteItems(get(res, 'ConfigurationId'));
        return of(res);
      })
    ).subscribe((favorite: Favorite) => {
      this.favorite$.next(favorite);
    }));
  }

  private getFavoriteItems(configurationId: string) {
    this.subscriptions.push(this.favoriteService.getFavoriteItems(configurationId)
      .subscribe(res => {
        const lines = LineItemService.groupItems(res);
        this.lineItems$.next(lines);
      }));
  }

  addFavoriteToCart(favorite: Favorite) {
    this.isLoading = true;
    this.subscriptions.push(this.favoriteService.addFavoriteToCart(favorite.Id)
      .subscribe(() => {
        this.isLoading = false;
        this.exceptionService.showSuccess('SUCCESS.FAVORITE.ADD_FAVORITE_TO_CART', 'SUCCESS.FAVORITE.TITLE', { name: favorite.Name });
      },
        (err) => this.exceptionService.showError(err)
      ));
  }

  updateFavorite(fieldValue, favorite, fieldName) {
    set(favorite, fieldName, fieldValue);
    this.subscriptions.push(this.favoriteService.updateFavorite(favorite).subscribe(() => this.getFavorite()));
  }

  ngOnDestroy() {
    if (!isEmpty(this.subscriptions)) {
      forEach(this.subscriptions, item => item.unsubscribe());
    }
  }

}
