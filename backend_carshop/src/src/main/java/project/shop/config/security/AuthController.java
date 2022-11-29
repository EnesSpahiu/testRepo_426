package project.shop.config.security;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import project.shop.customer.Customer;

@RequestMapping("/auth/")
@Controller
public class AuthController {
  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @GetMapping("refresh-token")
  public ResponseEntity<Map<String, String>> refreshToken(HttpServletRequest request) {
    String authHeader = request.getHeader(AUTHORIZATION);
    return ResponseEntity.ok(authService.refreshToken(authHeader));
  }

  @PostMapping("signup")
  public ResponseEntity<Customer> signUp(@RequestBody Customer customer) {
    return ResponseEntity.ok(authService.signUp(customer));
  }
}