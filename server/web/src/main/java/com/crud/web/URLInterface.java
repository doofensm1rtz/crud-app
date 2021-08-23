package com.crud.web;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface URLInterface {
    List<URL> getAllURLs();

    ResponseEntity<URL> getURLByName(String name);
    
    URL createURL(URL url);
    
    ResponseEntity<URL> updateURL(String name, URL newURL);
    
    ResponseEntity<String> deleteURL(String name);
}
