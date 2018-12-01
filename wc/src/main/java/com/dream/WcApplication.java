package com.dream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages="com.dream.wc")
@EntityScan("com.dream.wc")
public class WcApplication {

	public static void main(String[] args) {
		SpringApplication.run(WcApplication.class, args);
	}
}
