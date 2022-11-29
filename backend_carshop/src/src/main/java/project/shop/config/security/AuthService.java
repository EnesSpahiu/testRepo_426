package project.shop.config.security;


import org.springframework.stereotype.Service;

import java.util.Map;
import project.shop.customer.Customer;
import project.shop.customer.CustomerService;

@Service
public class AuthService {
  private final JWTManager jwtManager;
  private final CustomerService customerService;

  public AuthService(JWTManager jwtManager, CustomerService customerService) {
    this.jwtManager = jwtManager;
    this.customerService = customerService;
  }

  public Map<String, String> refreshToken(String authHeader) {
    String refreshToken = authHeader.substring("Bearer ".length());
    String username = jwtManager.verifyToken(refreshToken).getSubject();
    String accessToken = jwtManager.createAccessToken(username);
    refreshToken = jwtManager.createRefreshToken(username);
    return Map.of("access_token", accessToken, "refresh_token", refreshToken);
  }

  public Customer signUp(Customer customer) {
    return customerService.saveCustomer(customer);
  }
}
