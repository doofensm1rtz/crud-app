package com.crud.web;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "URL")
public class URL {
    @Id
    private String name;
    private List<String> url;

    public URL() {}

    public URL(String name, List<String> url) {
        this.name = name;
        this.url = url;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public List<String> getURL() {
        return url;
    }

    public void setURL(List<String> url) {
        this.url = url;
    }
}
