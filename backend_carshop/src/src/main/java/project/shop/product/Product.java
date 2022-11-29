package project.shop.product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.shop.generic.ExtendedEntity;
import project.shop.shoppingcart.ShoppingCart;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product extends ExtendedEntity {
    private String name;
    private double price;
    private String description;
    private String picture_url;
}
