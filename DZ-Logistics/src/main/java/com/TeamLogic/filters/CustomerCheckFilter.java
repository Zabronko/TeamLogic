package com.TeamLogic.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.filter.GenericFilterBean;

import com.TeamLogic.Services.GenericService;

public class CustomerCheckFilter extends GenericFilterBean {

	private int customerId;
	
	GenericService service;
	
    @Override
    public void doFilter(
      ServletRequest request, 
      ServletResponse response,
      FilterChain chain) throws IOException, ServletException {
    	// lazy load generic service @Filter can not autowire
    	if(service==null){
            ServletContext servletContext = request.getServletContext();
            WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
            service = webApplicationContext.getBean(GenericService.class);
        }
    	// get customerId from service for current user
		this.customerId = service.getCutomerIdByUsername();
		//find the url that the request was sent from in order to match customer to request
		String url = "";
		if (request instanceof HttpServletRequest) {
			 url = ((HttpServletRequest)request).getRequestURL().toString();
		}
		// if user matches customer information they are trying to request then pass the request to the response
		if(url.endsWith(customerId+"")) {
			chain.doFilter(request, response);	
		}else { // else send unauthorized error
			((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Page Not Found");
		}
    }
    
    
}
