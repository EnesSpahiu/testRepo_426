package project.shop.product;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import project.shop.customer.Customer;
import project.shop.customer.CustomerService;
import project.shop.productcart.ProductCart;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@AutoConfigureMockMvc
@SpringBootTest
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProductRepository productRepository;

    @BeforeEach
    void setUp() {
        productRepository.save(new Product("test", 1, "test", "test"));
        productRepository.save(new Product("test2", 1, "test2", "test2"));
    }

    @Test
    void getAllProducts() throws Exception {

        //WHEN
        MvcResult mockData = mockMvc.perform(get("http://localhost8080/product").accept(MediaType.APPLICATION_JSON)).andReturn();

        //THEN
        JSONArray jsonArray = new JSONArray(mockData.getResponse().getContentAsString());
        JSONObject jsonObject = jsonArray.getJSONObject(1);
        Assertions.assertEquals("test2", jsonObject.get("name"));

        Assertions.assertEquals(HttpStatus.OK, mockData.getResponse().getStatus());
    }

    @Test
    void saveProduct() {
        //WHEN
        MvcResult mockData = mockMvc.perform(post("http://localhost8080/product").accept(MediaType.APPLICATION_JSON)).andReturn();

        //THEN
        JSONArray jsonArray = new JSONArray(mockData.getResponse().getContentAsString());
        JSONObject jsonObject = jsonArray.getJSONObject(1);
        Assertions.assertEquals("test2", jsonObject.get("name"));

        Assertions.assertEquals(HttpStatus.OK, mockData.getResponse().getStatus());
    }

    @Test
    void updateProductById() {
        //WHEN
        MvcResult mockData = mockMvc.perform(update("http://localhost8080/product").accept(MediaType.APPLICATION_JSON)).andReturn();

        //THEN
        JSONArray jsonArray = new JSONArray(mockData.getResponse().getContentAsString());
        JSONObject jsonObject = jsonArray.getJSONObject(1);
        Assertions.assertEquals("test2", jsonObject.get("name"));

        Assertions.assertEquals(HttpStatus.OK, mockData.getResponse().getStatus());
    }

    @Test
    void deleteProductById() {
        //WHEN
        MvcResult mockData = mockMvc.perform(delete("http://localhost8080/product/1").accept(MediaType.APPLICATION_JSON)).andReturn();

        //THEN
        JSONArray jsonArray = new JSONArray(mockData.getResponse().getContentAsString());
        JSONObject jsonObject = jsonArray.getJSONObject(1);
        Assertions.assertEquals("test2", jsonObject.get("name"));

        Assertions.assertEquals(HttpStatus.OK, mockData.getResponse().getStatus());
    }
}