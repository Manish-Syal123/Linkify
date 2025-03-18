package com.url.shortener.dtos;

import lombok.Data;

import java.util.Set;

// DTO => data transfer object
@Data
public class RegisterRequest {
    private String username;
    private String email;
    private Set<String> role;
    private String password;
}
