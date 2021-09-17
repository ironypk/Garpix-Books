import React from 'react';
import {Books} from '../pages/Books';
import {Authors} from '../pages/Authors';
import {Main} from '../components/Main';
import {AddAuthor} from '../pages/AddAuthor';
import {EditAuthor} from '../pages/EditAuthor';
import {AboutAuthor} from '../pages/AboutAuthor';
import {AddBook} from '../pages/AddBook';
import {EditBook} from '../pages/EditBook';
import {AboutBook} from '../pages/AboutBook';

export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean
}

export enum RouterNames {
    BOOKS = '/books',
    AUTHORS = '/authors',
    MAIN = '/',
    AUTHOR_CREATE = '/author/create',
    EDIT_AUTHOR = '/author/edit/:id',
    ABOUT_AUTHOR = '/author/:id',
    BOOK_CREATE = '/book/create',
    EDIT_BOOK = '/book/edit/:id',
    ABOUT_BOOK = '/book/:id'
}

export const routes: IRoute[] = [
    {
        path: RouterNames.BOOKS,
        exact: true,
        component: Books
    },
    {
        path: RouterNames.AUTHORS,
        exact: true,
        component: Authors
    },
    {
        path: RouterNames.MAIN,
        exact: true,
        component: Main
    },
    {
        path: RouterNames.AUTHOR_CREATE,
        exact: true,
        component: AddAuthor
    },
    {
        path: RouterNames.EDIT_AUTHOR,
        exact: true,
        component: EditAuthor
    },
    {
        path: RouterNames.ABOUT_AUTHOR,
        exact: true,
        component: AboutAuthor
    },
    {
        path: RouterNames.BOOK_CREATE,
        exact: true,
        component: AddBook
    },
    {
        path: RouterNames.EDIT_BOOK,
        exact: true,
        component: EditBook
    },
    {
        path: RouterNames.ABOUT_BOOK,
        exact: true,
        component: AboutBook
    }
]