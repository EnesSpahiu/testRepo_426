package project.shop.customer;

import java.lang.reflect.Array;
import java.util.ArrayList;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@AllArgsConstructor
@Slf4j
public class CustomerService implements UserDetailsService {
  private final CustomerRepository customerRepository;
  private final PasswordEncoder passwordEncoder;

  public Collection<Customer> findAllCustomers() {
    return customerRepository.findAll();
  }

  public Customer findById(String customerId) {
    return customerRepository.findById(customerId).get();
  }

  public Customer saveCustomer(Customer entity) {
    log.info("Saving new Customer {} to the database", entity.getUsername());
    entity.setPassword(passwordEncoder.encode(entity.getPassword()));
    customerRepository.save(entity);
    return entity;
  }

  public Customer updateById(String customerId, Customer customer) {
    log.info("Updating user with ID {}", customer.getId());
    Customer updatedCustomer = findById(customerId);

    //updatedCustomer.setEmail(customer.getEmail());
    updatedCustomer.setPassword(customer.getPassword());
    updatedCustomer.setUsername(customer.getUsername());
    updatedCustomer.setProductCart(customer.getProductCart());

    return customer;
  }

  public void deleteById(String userId) {
    customerRepository.deleteById(userId);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Customer customer = customerRepository.findByUsername(username);
    if (customer == null) {
      log.error("Customer not found");
      throw new UsernameNotFoundException("Customer not found");
    } else {
      log.info("Customer found: {}", username);
    }
    return new User(customer.getUsername(), customer.getPassword(), new ArrayList<>());
  }

  public Customer findByUsername(String username) {
    return customerRepository.findByUsername(username);
  }

//  public Customer findByEmail(String customerEmail) {
//    return customerRepository.findByEmail(customerEmail);
//  }
}
