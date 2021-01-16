package com.bootcampds2.dscatalog.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.bootcampds2.dscatalog.entities.Category;
import com.bootcampds2.dscatalog.entities.Product;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private Instant date;
	private String description;
	private String imgUrl;
	
	private List<CategoryDTO> categories = new ArrayList<>();
	
	public ProductDTO() {
		
	}

	public ProductDTO(Long id, String name, Double price, Instant date, String description, String imgUrl) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.date = date;
		this.description = description;
		this.imgUrl = imgUrl;
	}
	
	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		date = entity.getDate();
		description = entity.getDescription();
		imgUrl = entity.getImgUrl();
	}
	
	public ProductDTO(Product entity, Set<Category> categories) {
		this(entity);
		categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}
	
	

}
