package project.shop.customer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.userdetails.UserDetails;
import project.shop.generic.ExtendedEntity;
import project.shop.productcart.ProductCart;
import project.shop.shoppingcart.ShoppingCart;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer extends ExtendedEntity{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String password;
    private String username;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productcart_id", referencedColumnName = "id")
    private ProductCart productCart;

}
