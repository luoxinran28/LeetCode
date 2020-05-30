# Object Oriented Design

## Solid 原则：

• S – Single responsibility principle

• O – Open close principle

• L – Liskov substitution principle

• I – Interface segregation principle

• D – Dependency inversion principle

## 常见设计模式：

```java
/**
 * 
 * Design Patterns
 *  
 */

// Strategy Factory:

public interface PaymentStrategy { 
  public void processPayment(Payment payment);
}

public class CreditStrategy implements PaymentStrategy { 
  public void processPayment(Payment payment) { 
    // ...
  }
}

public class PaymentStrategyFactory { 
  public Strategy createStrategy(Payment payment) { 
    if (payment.getMethod().equals("paypal")) { 
      return new CreditStrategy(payment);
    } else if (payment.getMethod().equals("credit")) { 
      return new PaypalStrategy(payment);
    }
  }
}

public void pay(Payment payment) { 
  new PaymentStrategyFactory();
  PaymentStrategy strategy = factory.createStrategy(payment);
  strategy.processPayment(payment);
}

// Simple Factory
public Reader createReader(Book book) { 
  if (book.getFormat === Format.PDF) { 
    return new PDFReader(book);
  } else if (book.getFormat === Format.MOBI) { 
    return new MOBIReader(book);
  } else if (book.getFormat === Format.EPUB) { 
    return new EPUBReader(book);
  } 
  reuturn null;
}
Reader reader = factory.createReader(book);
reader.display();

// Singleton
public class ParkingLot { 
  private static ParkingLot _instance = null;

  public static synchronized ParkingLot getInstance() { 
    if (_instance == null) { 
      _instance = new ParkingLot();
    }
    return _instance;
  }
}
```

