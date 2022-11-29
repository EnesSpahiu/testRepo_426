package project.shop.product;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/product")
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class ProductController {
    private final ProductService productService;

    @GetMapping({"", "/"})
    public ResponseEntity<Collection<Product>> getAllProducts(){
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }

    @GetMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Product> getProductById(@PathVariable String id){
        return new ResponseEntity<>(productService.findById(id), HttpStatus.OK);
    }

    @PostMapping({"", "/"})
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.save(product), HttpStatus.OK);
    }

    @PutMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Product> updateProductById(@PathVariable String id, @RequestBody Product product){
        return new ResponseEntity<>(productService.updateById(id, product), HttpStatus.OK);
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Void> deleteProductById(@PathVariable String id){
        productService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
