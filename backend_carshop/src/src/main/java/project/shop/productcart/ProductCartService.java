package project.shop.productcart;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProductCartService {

    private ProductCartRepository repository;

    public ProductCartService(ProductCartRepository repository) {
        this.repository = repository;
    }

    public ProductCart getById(String id) {
        return repository.findById(id).get();
    }

    public ProductCart save(ProductCart entity) {
        repository.save(entity);
        return entity;
    }

    public ProductCart updateById(String productCartId, ProductCart entity) {
        log.info("Updating product cart with ID {}", entity.getId());
        ProductCart updatedProductCart = getById(productCartId);

        updatedProductCart.setShoppingCart(entity.getShoppingCart());
        updatedProductCart.setProduct(entity.getProduct());

        return entity;
    }

    public void deleteById(String productCartId) {
        repository.deleteById(productCartId);
    }
}
