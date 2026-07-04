package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBooks() {
        System.out.println("Managing books in the service...");
        if (bookRepository != null) {
            bookRepository.fetchBooks();
        } else {
            System.out.println("BookRepository is not injected.");
        }
    }
}
