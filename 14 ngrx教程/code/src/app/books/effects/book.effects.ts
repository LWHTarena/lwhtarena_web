import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { Book } from '../../books/models';
import {
  BooksApiActions,
  FindBookPageActions,
} from '../../books/actions';
import { GoogleBooksService } from '../../core/services/google-books.service';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class BookEffects {
  search$ = createEffect(
    () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(FindBookPageActions.searchBooks),
        debounceTime(debounce, scheduler),
        switchMap(({ query }) => {
          if (query === '') {
            return empty;
          }

          console.log('查找书籍,运行顺序03:query=',query);

          /**
           * skip
           * 函数签名: skip(the: Number): Observable
           * 跳过N个(由参数提供)发出值。
           * 为什么使用 skip？
           * skip 允许你忽略源 observable 开头的n个值。通常，当你总是想忽略 observable
           * 的某些值时，应该使用 skip 。或许你不需要这些开头的值，或许你订阅了 Replay 或
           * BehaviorSubject 从而不需要初始值。如果你不关心开头的一组值，那就使用 skip 吧。
           */
          const nextSearch$ = this.actions$.pipe(
            ofType(FindBookPageActions.searchBooks),
            skip(1)
          );

          console.log('nextSearch$:',nextSearch$);

          /**
           * takeUntil
           * 函数签名: takeUntil(notifier: Observable): Observable
           * 发出值，直到提供的 observable 发出值，它便完成。
           */
          return this.googleBooks.searchBooks(query).pipe(
            takeUntil(nextSearch$),
            map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
            catchError(err =>
              of(BooksApiActions.searchFailure({ errorMsg: err.message }))
            )
          );
        })
      )
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService
  ) {}
}
