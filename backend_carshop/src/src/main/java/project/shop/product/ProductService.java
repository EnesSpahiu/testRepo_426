package project.shop.product;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
    private final ProductRepository repository;

    public Collection<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(String productId) {
        return repository.findById(productId).get();
    }

    public Product save(Product product) {
        return repository.save(product);
    }

    public Product updateById(String productId, Product entity) {
        log.info("Saving new Product {} to the database", entity.getName());
        Product newProduct = findById(productId);
        newProduct.setName(entity.getName());
        newProduct.setDescription(entity.getDescription());
        newProduct.setPicture_url(entity.getPicture_url());
        newProduct.setPrice(entity.getPrice());

        return entity;
    }

    public void deleteById(String productId) {
        repository.deleteById(productId);
    }

}
