# React + Vite


WEBSITE NAME: Book Vibe

[Live site URL] (https://whimsical-zabaione-2560d2.netlify.app/)


Features and Characteristics:

1. Figma-Inspired Design:

    The website design closely resembles the aesthetic of Figma, ensuring a modern and visually appealing layout.

2. Navbar with Active Route:

    The navbar prominently displays the website logo on the left and essential menu items like Home, Listed Books, and Pages to Read.

    Active route highlighting is implemented to provide visual feedback to users.

3. Banner Section:

    The banner section features a captivating title and a prominent button labeled "View The List" that directs users to the Listed Books page.
    An eye-catching image related to the website theme is positioned on the right side of the banner.

4. JSON Data Integration:

    A JSON file is created and integrated into the website, containing data fx of 6 books.

5. Books Section with Cards:
    The Books section showcases a heading followed by a grid layout of book cards, 
    Each book card displays essential information.

6. Dynamic Book Details Page:

    Clicking on any book card redirects users to the dynamic Book Details page, where they can view detailed information about the selected book.
    The Book Details page dynamically populates content based on the selected book, including image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, and rating.

7. Interactive Book Actions:

    Users can interact with the Book Details page by clicking on buttons labeled "Read" or "Wishlist" to add the book to their respective lists.
    Toasts or Sweet Alerts provide informative feedback upon button click, indicating successful addition to local storage or existing status.

8. Prevent Duplicate Selection:

    To enhance user experience, the website prevents users from adding the same book to both "Read" and "Wishlist".
    If a user attempts to select a book already added to one list for the other list, a toast notifies them that the action is not permitted.

9. Listed Books Page:

    It showcases all books added to local storage, categorized into read and wishlist sections, with corresponding book details displayed for each entry.

10. 404 Page:

    A custom 404 route or not found page is implemented to gracefully handle navigation errors and guide users back to the main content.

11. The website is responsive on desktop, and mobile devices.