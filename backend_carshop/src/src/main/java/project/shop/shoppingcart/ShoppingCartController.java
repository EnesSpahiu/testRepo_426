package project.shop.shoppingcart;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/shoppingcart")
@CrossOrigin("http://localhost:3000/")
public class ShoppingCartController {

    private ShoppingCartService service;

    public ShoppingCartController(ShoppingCartService service) {
        this.service = service;
    }

    @GetMapping({"/{id}", "/{id}/"})
    public ResponseEntity<ShoppingCart> getShoppingCart(@PathVariable("id") String id) {
        return new ResponseEntity<>(service.getShoppingCart(id), HttpStatus.OK);
    }

    @PostMapping({"/"})
    public ResponseEntity<ShoppingCart> saveShoppingCart(@RequestBody ShoppingCart shoppingCart) {
        return new ResponseEntity<>(service.save(shoppingCart), HttpStatus.OK);
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Void> deleteShoppingCart(@PathVariable("id") String id) {
        service.deleteShoppingCart(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping({"/{id}", "/{id}/"})
    public ResponseEntity<ShoppingCart> updateShoppingCartById(@PathVariable String id, @RequestBody ShoppingCart shoppingCart) {
        return new ResponseEntity<>(service.updateById(id, shoppingCart), HttpStatus.OK);
    }
}
