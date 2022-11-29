package project.shop.shoppingcart;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.shop.generic.ExtendedEntity;
import project.shop.product.Product;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ShoppingCart extends ExtendedEntity {

    private String ShoppingCartNumber;

}
