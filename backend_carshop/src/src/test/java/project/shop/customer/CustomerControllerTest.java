package project.shop.customer;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import project.shop.productcart.ProductCart;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@AutoConfigureMockMvc
@SpringBootTest
class CustomerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private CustomerService customerService;

    public CustomerControllerTest(CustomerService customerService) {
        this.customerService = customerService;
    }

    @BeforeEach
    void setUp() {
        customerService.saveCustomer(new Customer("test", "test", "test", "test", new ProductCart()));
    }

    @Test
    void getAllCustomers() throws Exception {

        //WHEN
        MvcResult mockData = mockMvc.perform(get("/customer").accept(MediaType.APPLICATION_JSON)).andReturn();

        //THEN
        JSONArray jsonArray = new JSONArray(mockData.getResponse().getContentAsString());
        JSONObject jsonObject = jsonArray.getJSONObject(0);
        Assertions.assertEquals("2", jsonObject.get("id"));
        Assertions.assertEquals("Noser Young AG", jsonObject.get("name"));

        Assertions.assertEquals(HttpStatus.OK, mockData.getResponse().getStatus());
    }

    @Test
    void getCustomerById() {
    }

    @Test
    void saveCustomer() {
    }

    @Test
    void updateCustomer() {
    }

    @Test
    void deleteCustomer() {
    }
}