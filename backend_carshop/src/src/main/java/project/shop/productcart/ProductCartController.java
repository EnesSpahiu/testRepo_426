package project.shop.productcart;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/productcart")
@CrossOrigin("http://localhost:3000/")
public class ProductCartController {

    private ProductCartService service;

    public ProductCartController(ProductCartService service) {
        this.service = service;
    }

    @GetMapping({"/{id}", "/{id}/"})
    public ResponseEntity<ProductCart> getById(@PathVariable String id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }

    @PostMapping({"", "/"})
    public ResponseEntity<ProductCart> save(@RequestBody ProductCart productCart) {
        return new ResponseEntity<>(service.save(productCart), HttpStatus.CREATED);
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        service.deleteById(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @PutMapping({"/{id}", "/{id}/"})
    public ResponseEntity<ProductCart> updateProductCartById(@PathVariable String id, @RequestBody ProductCart productCart) {
        return new ResponseEntity<>(service.updateById(id, productCart), HttpStatus.OK);
    }
}
