package com.bootcampds2.dscatalog.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.bootcampds2.dscatalog.entities.Role;

public class RoleDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String authority;

    private Set<Role> roles = new HashSet<>();

    public RoleDTO() {
    }

    public RoleDTO(Long id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public RoleDTO(Role role) {
        id = role.getId();
        authority = role.getAuthority();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public Set<Role> getRoles() {
        return roles;
    }

}
