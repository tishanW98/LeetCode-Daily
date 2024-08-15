import java.io.*;
import java.util.*;

// Base class User
abstract class User {
    protected String username;
    protected String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public abstract void displayMenu();
    public abstract void viewBags();
    public abstract void addBag();
    public abstract void addCategory();
    public abstract void searchBagsByCategory();
}

// Cashier class
class Cashier extends User {

    public Cashier(String username, String password) {
        super(username, password);
    }

    @Override
    public void displayMenu() {
        Scanner scanner = new Scanner(System.in);
        int choice;
        do {
            System.out.println("\n--- Cashier Menu ---");
            System.out.println("1. View Bags");
            System.out.println("2. Add Bag");
            System.out.println("3. Add Category");
            System.out.println("4. Search Bags by Category");
            System.out.println("5. Logout");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    viewBags();
                    break;
                case 2:
                    addBag();
                    break;
                case 3:
                    addCategory();
                    break;
                case 4:
                    searchBagsByCategory();
                    break;
                case 5:
                    System.out.println("Logging out...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);
    }

    @Override
    public void viewBags() {
        List<Bag> bags = LittleBagShop.getBags();
        if (bags.isEmpty()) {
            System.out.println("No bags available.");
        } else {
            for (Bag bag : bags) {
                System.out.println(bag);
            }
        }
    }

    @Override
    public void addBag() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter bag name: ");
        String name = scanner.nextLine();
        System.out.print("Enter category name: ");
        String categoryName = scanner.nextLine();

        Category category = LittleBagShop.findCategory(categoryName);
        if (category == null) {
            System.out.println("Category not found. Please add the category first.");
        } else {
            Bag bag = new Bag(name, category);
            LittleBagShop.addBag(bag);
            System.out.println("Bag added successfully.");
        }
    }

    @Override
    public void addCategory() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter category name: ");
        String categoryName = scanner.nextLine();
        Category category = new Category(categoryName);
        LittleBagShop.addCategory(category);
        System.out.println("Category added successfully.");
    }

    @Override
    public void searchBagsByCategory() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter category name: ");
        String categoryName = scanner.nextLine();
        boolean found = false;
        List<Bag> bags = LittleBagShop.getBags();
        for (Bag bag : bags) {
            if (bag.getCategory().getName().equalsIgnoreCase(categoryName)) {
                System.out.println(bag);
                found = true;
            }
        }
        if (!found) {
            System.out.println("No bags found in this category.");
        }
    }
}

// Manager class
class Manager extends Cashier {

    public Manager(String username, String password) {
        super(username, password);
    }

    public Cashier createCashier(String username, String password) {
        Cashier newCashier = new Cashier(username, password);
        System.out.println("New cashier account created successfully.");
        return newCashier;
    }

    @Override
    public void displayMenu() {
        Scanner scanner = new Scanner(System.in);
        int choice;
        do {
            System.out.println("\n--- Manager Menu ---");
            System.out.println("1. View Bags");
            System.out.println("2. Add Bag");
            System.out.println("3. Add Category");
            System.out.println("4. Search Bags by Category");
            System.out.println("5. Create Cashier Account");
            System.out.println("6. Logout");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    viewBags();
                    break;
                case 2:
                    addBag();
                    break;
                case 3:
                    addCategory();
                    break;
                case 4:
                    searchBagsByCategory();
                    break;
                case 5:
                    createCashierAccount();
                    break;
                case 6:
                    System.out.println("Logging out...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 6);
    }

    private void createCashierAccount() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter new cashier username: ");
        String username = scanner.nextLine();
        System.out.print("Enter new cashier password: ");
        String password = scanner.nextLine();
        Cashier newCashier = createCashier(username, password);
        LittleBagShop.addUser(newCashier);
    }
}

// Category class
class Category implements Serializable {
    private String name;

    public Category(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Category: " + name;
    }
}

// Bag class
class Bag implements Serializable {
    private String name;
    private Category category;

    public Bag(String name, Category category) {
        this.name = name;
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "Bag: " + name + ", Category: " + category.getName();
    }
}

// Main class to run the application
public class LittleBagShop {

    private static List<Bag> bags = new ArrayList<>();
    private static List<Category> categories = new ArrayList<>();
    private static List<User> users = new ArrayList<>();

    public static void main(String[] args) {
        try {
            // Create a manager with a predefined account
            Manager manager = new Manager("admin", "admin123");
            users.add(manager);

            // Load data if available
            loadDataFromFile("shopData.ser");

            // Start the application
            while (true) {
                login();
            }

        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void addUser(User user) {
        users.add(user);
    }

    public static void addBag(Bag bag) {
        bags.add(bag);
    }

    public static void addCategory(Category category) {
        categories.add(category);
    }

    public static List<Bag> getBags() {
        return bags;
    }

    public static List<Category> getCategories() {
        return categories;
    }

    public static Category findCategory(String categoryName) {
        for (Category category : categories) {
            if (category.getName().equalsIgnoreCase(categoryName)) {
                return category;
            }
        }
        return null;
    }

    private static void login() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        User user = authenticate(username, password);
        if (user != null) {
            user.displayMenu();
        } else {
            System.out.println("Invalid credentials. Please try again.");
        }
    }

    private static User authenticate(String username, String password) {
        for (User user : users) {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                return user;
            }
        }
        return null;
    }

    private static void loadDataFromFile(String fileName) throws IOException, ClassNotFoundException {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(fileName))) {
            bags = (List<Bag>) ois.readObject();
            categories = (List<Category>) ois.readObject();
        }
    }
}
