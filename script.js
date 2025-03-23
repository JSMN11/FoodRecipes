const recipes = [
    // Vegetarian Breakfast Recipes
    {
        name: "Cream Cheese & Chive Omelet",
        category: "Vegetarian Breakfast",
        prepTime: "15 Minutes",
        ingredients: ["olive oil", "eggs", "chives", "water", "salt", "pepper", "cream cheese"],
        directions: "In a large nonstick pan, heat oil over medium-high heat. Whisk the eggs, chives, water, salt, and pepper together. Add egg mixture to the pan. As the eggs set, push cooked edges toward the center, letting uncooked portions flow underneath. When the eggs are done, sprinkle cream cheese on one side; fold the other side over filling. Slide omelet onto a plate; cut in half."
    },
    {
        name: "Avocado Toast",
        category: "Vegetarian Breakfast",
        prepTime: "5 Minutes",
        ingredients: ["bread", "avocado", "salt", "black pepper", "lemon"],
        directions: "Toast the bread of your choice. Cut an avocado and spread it across your bread. Then, add salt, pepper, and lemon if preferred, to finish up."
    },
    {
        name: "Fruit Parfait",
        category: "Vegetarian Breakfast",
        prepTime: "15 Minutes",
        ingredients: ["fat-free vanilla yogurt", "peaches", "blackberries", "strawberries", "granola"],
        directions: "Layer half the yogurt, peaches, blackberries, and granola into 4 parfait glasses. Repeat layers."
    },
    // Vegetarian Lunch Recipes
    {
        name: "Veggie Burrito",
        category: "Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["avocado", "cilantro", "lime", "sour cream", "Greek yogurt", "black beans", "rice", "tortilla", "jalapeño peppers", "onions"],
        directions: "Blend avocado to a creamy sauce using avocado, cilantro, jalapeño, garlic, lime juice, and sour cream or Greek yogurt. Cook rice with 2 cups of water and salt. In a large skillet, cook bell peppers, poblano pepper, and red onion until tender. Layer the vegetables, rice, and cream sauce in a tortilla, squeeze some lime over it, and wrap it up."
    },
    {
        name: "Spaghetti",
        category: "Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["spaghetti", "marinara sauce", "salt", "water"],
        directions: "Boil a large pot of water with salt. Add the spaghetti and cook for 7-11 minutes. Strain the spaghetti, add marinara sauce, mix well, and serve."
    },
    {
        name: "Grilled Cheese",
        category: "Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["bread", "butter", "cheese", "mayonnaise"],
        directions: "Spread mayo on the outside of 2 slices of bread. Add grated cheese inside. Heat butter in a pan over medium heat. Cook sandwich for 2-3 minutes on each side until golden brown. Remove when cheese is melted and serve."
    },
    // Non-Vegetarian Lunch Recipes
    {
        name: "Sweet & Spicy Turkey Sandwich",
        category: "Non-Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["bread", "roasted turkey breast", "pepperjack cheese", "butter", "strawberry preserves"],
        directions: "Butter one side of each bread slice with one teaspoon of butter. Place one slice in the skillet, top with turkey and cheese. Add second slice on top and cook until golden brown, about 3-5 minutes per side. Top with strawberry preserves or serve on the side."
    },
    {
        name: "Chicken Noodle Soup",
        category: "Non-Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["onion", "chicken", "chicken broth", "frozen mixed vegetables", "egg noodles"],
        directions: "Sauté onion in olive oil, add chicken, vegetables, and broth, bring to a boil. Reduce heat, add noodles, and cook according to package directions. Season with salt, pepper, and parsley."
    },
    {
        name: "Tuna-Egg Salad Sandwich",
        category: "Non-Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["bread", "canned tuna", "eggs", "green onion", "mayonnaise", "salt"],
        directions: "Boil eggs for 10 minutes, then peel and mash in a bowl with tuna, green onions, mayonnaise, and salt. Spread on bread or toast. Optional: add lettuce."
    },
    {
        name: "Lasagna",
        category: "Non-Vegetarian Lunch",
        prepTime: "Varies",
        ingredients: ["olive oil", "garlic", "ground pork", "tomato paste", "white wine", "parsley", "ricotta", "pecorino", "spinach", "mozzarella", "no-boil lasagna noodles"],
        directions: "Cook ground pork, garlic, and tomato paste. Add wine and simmer. Mix ricotta with spinach, mozzarella, and parsley. Layer in a baking dish with lasagna noodles and sauce. Bake at 425°F for 25-30 minutes until golden brown."
    },
    // Vegetarian Dinner Recipes
    {
        name: "Cottage Cheese Alfredo",
        category: "Vegetarian Dinner",
        prepTime: "Varies",
        ingredients: ["salt", "dry fettuccine", "extra-virgin olive oil", "low-fat cottage cheese", "milk", "Parmesan", "garlic", "unsalted butter", "all-purpose flour", "baby spinach", "crushed red pepper flakes"],
        directions: "Cook fettuccine in salted water. Blend cottage cheese, milk, Parmesan, garlic, butter, flour, and salt until smooth. Simmer sauce and add spinach. Toss with pasta and serve with optional red pepper flakes."
    },
    {
        name: "Marry Me Pasta",
        category: "Vegetarian Dinner",
        prepTime: "Varies",
        ingredients: ["salt", "rigatoni", "extra-virgin olive oil", "garlic", "fresh thyme", "crushed red pepper flakes", "sun-dried tomatoes", "heavy cream", "vegetable broth", "Parmesan", "basil"],
        directions: "Cook pasta, then prepare sauce with garlic, thyme, red pepper flakes, and sun-dried tomatoes. Add cream, broth, and Parmesan. Toss pasta and sauce together and serve with basil."
    },
    {
        name: "French Onion Mac and Cheese",
        category: "Vegetarian Dinner",
        prepTime: "Varies",
        ingredients: ["fresh thyme", "butter", "yellow onions", "salt", "pasta", "all-purpose flour", "whole milk", "fontina cheese", "sharp white cheddar", "Dijon mustard", "cayenne pepper"],
        directions: "Caramelize onions, cook pasta, and prepare cheese sauce. Combine pasta, onions, and sauce. Top with additional cheese and bake until bubbly. Broil for a golden finish."
    },
    {
        name: "Penne Alla Vodka",
        category: "Vegetarian Dinner",
        prepTime: "Varies",
        ingredients: ["unsalted butter", "shallot", "garlic", "tomato paste", "crushed red pepper flakes", "vodka", "kosher salt", "penne pasta", "heavy cream", "Parmesan", "fresh basil"],
        directions: "Prepare the vodka sauce with butter, shallot, garlic, and tomato paste. Cook pasta, then toss with sauce, adding cream, Parmesan, and pasta water as needed. Serve with basil."
    },
    {
        name: "Instant Gingerbread Hot Chocolate",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["cocoa", "white sugar", "brown sugar", "ground ginger", "ground cinnamon", "ground cloves", "salt", "cayenne pepper (optional)"],
        directions: "Add cocoa, white sugar, brown sugar, ginger, cinnamon, cloves, salt, and cayenne to a bowl, and whisk thoroughly to combine. Store in an airtight container until needed. Be sure to stir very thoroughly before each use. To make hot chocolate, heat milk over medium heat until it almost starts to simmer. Whisk in 2 tablespoons of instant gingerbread hot chocolate mix per 1 cup milk. Once everything is mixed together and dissolved, and the milk is piping hot, transfer into mugs and enjoy."
    },
    {
        name: "Old-Fashioned Lemonade",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["lemons", "white sugar", "water"],
        directions: "Juice lemons; you should have 1 cup juice. Combine juice, sugar, and water in a 1/2-gallon pitcher. Stir until sugar dissolves. Taste and add more water if desired. Chill and serve over ice."
    },
    {
        name: "Copycat V8 Juice",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["tomatoes", "onion", "celery", "carrot", "beets", "green bell pepper", "garlic", "water", "lemon juice", "white sugar", "horseradish", "Worcestershire sauce", "black pepper", "sterilized canning jar with lid and ring", "salt"],
        directions: "Process tomatoes, onion, celery, carrot, beet, green bell pepper, and garlic through a juicer. Stir together vegetable juices, water, lemon juice, sugar, horseradish, Worcestershire sauce, and black pepper in a large pot. Bring to a boil and cook until flavors blend, about 20 minutes. Meanwhile, sterilize the jar and lid in boiling water for at least 5 minutes. Ladle juice into the jar. Stir in sugar and salt. Wipe the rim of the jar with a moist paper towel. Top with the lid and screw on the ring. Process juice in a pressure canner at 10 pounds of pressure for 35 minutes. Remove the jar from the pressure canner and let cool."
    },
    {
        name: "Luscious Slush Punch",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["water", "white sugar", "strawberry flavored Jell-O mix", "pineapple juice", "lemon juice", "orange juice", "lemon-lime flavored carbonated beverage"],
        directions: "Bring water, sugar, and strawberry-flavored gelatin to a boil in a large saucepan; boil for 3 minutes. Stir in pineapple juice, lemon juice, and orange juice. Divide mixture into two separate containers and freeze. Combine contents of 1 container frozen juice mixture with 1 bottle lemon-lime flavored carbonated beverage in a punch bowl; stir until slushy. Repeat with remaining portions as needed."
    },
    {
        name: "Watermelon Slushie",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["watermelon", "ice cubes", "fresh lime juice", "white sugar", "salt (Optional)"],
        directions: "Place watermelon and ice into a blender. Pour in lime juice, sugar, and salt. Blend until smooth."
    },
    {
        name: "Blueberry Smoothie",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["blueberries", "plain yogurt", "2% reduced-fat milk", "white sugar", "vanilla extract", "ground nutmeg"],
        directions: "Blend blueberries, yogurt, milk, sugar, vanilla, and nutmeg in a blender until frothy, scraping down the sides of the blender if needed. Divide between 2 glasses and serve immediately."
    },
    {
        name: "Fruit and Yogurt Smoothie",
        category: "Drinks",
        prepTime: "Varies",
        ingredients: ["strawberries", "banana", "yogurt", "pineapple juice", "white sugar", "orange juice", "milk"],
        directions: "Combine strawberries, banana, yogurt, pineapple juice, sugar, orange juice, and milk in a blender. Blend until smooth."
    },

];

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("results");

    resultsContainer.innerHTML = ""; // Clear previous results

    if (searchQuery === "") {
        resultsContainer.innerHTML = "<p>Please enter an ingredient.</p>";
        return;
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery))
    );

    if (filteredRecipes.length === 0) {
        resultsContainer.innerHTML = "<p>No recipes found with that ingredient.</p>";
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            recipeCard.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><b>Category:</b> ${recipe.category}</p>
                <p><b>Prep Time:</b> ${recipe.prepTime}</p>
                <p><b>Ingredients:</b> ${recipe.ingredients.join(", ")}</p>
                <p><b>Directions:</b> ${recipe.directions}</p>
            `;

            resultsContainer.appendChild(recipeCard);
        });
    }
});
