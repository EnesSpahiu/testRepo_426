package project.shop.shoppingcart;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import project.shop.customer.Customer;

import java.util.Optional;

@Service
@Slf4j
public class ShoppingCartService {

    private ShoppingCartRepository repository;

    public ShoppingCartService(ShoppingCartRepository repository) {
        this.repository = repository;
    }

    public ShoppingCart getShoppingCart(String id) {
        Optional<ShoppingCart> shoppingCart = repository.findById(id);
        if (shoppingCart.isPresent()) {
            return shoppingCart.get();
        } else {
            return null;
        }
    }

    public ShoppingCart save(ShoppingCart shoppingCart) {
        return repository.save(shoppingCart);
    }

    public void deleteShoppingCart(String id) {
        repository.deleteById(id);
    }

    public ShoppingCart updateById(String shoppingCartId, ShoppingCart entity){
        log.info("Updating shopping cart with ID {}", entity.getId());
        ShoppingCart updatedShoppingCart = getShoppingCart(shoppingCartId);

        updatedShoppingCart.setShoppingCartNumber(entity.getShoppingCartNumber());

        return entity;
    }
}
