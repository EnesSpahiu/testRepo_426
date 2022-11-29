package project.shop.config.security;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import project.shop.config.security.filter.CustomAuthenticationFilter;
import project.shop.config.security.filter.CustomAuthorizationFilter;
import project.shop.customer.CustomerService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
  private final UserDetailsService userDetailsService;
  private final PasswordEncoder passwordEncoder;
  private final JWTManager jwtManager;
  private final CustomerService customerService;

  public SecurityConfig(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder, JWTManager jwtManager, CustomerService customerService) {
    this.userDetailsService = userDetailsService;
    this.passwordEncoder = passwordEncoder;
    this.jwtManager = jwtManager;
    this.customerService = customerService;
  }

  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    CustomAuthenticationFilter
        authenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean(), jwtManager, passwordEncoder, customerService);
    authenticationFilter.setFilterProcessesUrl("/auth/login");
    http.csrf().disable();
    http.cors();
    http.sessionManagement().sessionCreationPolicy(STATELESS);
    http.authorizeRequests().antMatchers("/auth/**").permitAll();
    http.authorizeRequests().anyRequest().authenticated();
    http.addFilter(authenticationFilter);
    http.addFilterBefore(new CustomAuthorizationFilter(jwtManager, customerService), UsernamePasswordAuthenticationFilter.class);
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }
}
