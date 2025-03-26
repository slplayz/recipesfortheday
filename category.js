async function getCategory() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    displayCategories(data.categories);
}

async function getRecipesFromCategory(category) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    displayRecipes(data.meals);
}

async function getRecipeById(idMeal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const data = await response.json();
    // console.log(data.meals[0]);

    const search = document.getElementById("name").value;
    const mealName = document.getElementById("mealName");
    const mealInstructions = document.getElementById("mealInstructions");
    const mealImage = document.getElementById("mealImage");
    const mealVideo = document.getElementById("mealVideo");
    const sidebar = document.getElementById("sidebar");
    const categoryContainer = document.getElementById("category-container");
    const recipeContainer = document.getElementById("recipe-container");
    const distription = document.getElementById("distription");

    // Ingredients Consts
    {
        const Ingredients = document.getElementById("Ingredients");
        const IngredientsT = document.getElementById("IngredientsT");
        const strIngredient1 = document.getElementById("strIngredient1")
        const strIngredient2 = document.getElementById("strIngredient2")
        const strIngredient3 = document.getElementById("strIngredient3")
        const strIngredient4 = document.getElementById("strIngredient4")
        const strIngredient5 = document.getElementById("strIngredient5")
        const strIngredient6 = document.getElementById("strIngredient6")
        const strIngredient7 = document.getElementById("strIngredient7")
        const strIngredient8 = document.getElementById("strIngredient8")
        const strIngredient9 = document.getElementById("strIngredient9")
        const strIngredient10 = document.getElementById("strIngredient10")
        const strIngredient11 = document.getElementById("strIngredient11")
        const strIngredient12 = document.getElementById("strIngredient12")
        const strIngredient13 = document.getElementById("strIngredient13")
        const strIngredient14 = document.getElementById("strIngredient14")
        const strIngredient15 = document.getElementById("strIngredient15")
        const strIngredient16 = document.getElementById("strIngredient16")
        const strIngredient17 = document.getElementById("strIngredient17")
        const strIngredient18 = document.getElementById("strIngredient18")
        const strIngredient19 = document.getElementById("strIngredient19")
        const strIngredient20 = document.getElementById("strIngredient20")
    }

    distription.style.display = "none";
    sidebar.style.display = "block";
    mealName.textContent = data.meals[0].strMeal;
    mealName.style.display = "block";
    mealImage.src = data.meals[0].strMealThumb;
    mealImage.style.display = "block";
    mealInstructions.textContent = data.meals[0].strInstructions;
    mealInstructions.style.display = "block";

    const youtubeUrl = data.meals[0].strYoutube;
    const embedUrl = youtubeUrl.replace("watch?v=", "embed/");
    mealVideo.src = embedUrl;
    mealVideo.style.display = "block";

    categoryContainer.style.display = "none";
    recipeContainer.style.display = "none";

    // Display Ingredients
    {
        Ingredients.style.display = "block";
        IngredientsT.style.display = "block";
        strIngredient1.textContent = data.meals[0].strIngredient1;
        strIngredient1.style.display = "block";
        strIngredient2.textContent = data.meals[0].strIngredient2;
        strIngredient2.style.display = "block";
        strIngredient3.textContent = data.meals[0].strIngredient3;
        strIngredient3.style.display = "block";
        strIngredient4.textContent = data.meals[0].strIngredient4;
        strIngredient4.style.display = "block";
        strIngredient5.textContent = data.meals[0].strIngredient5;
        strIngredient5.style.display = "block";
        strIngredient6.textContent = data.meals[0].strIngredient6;
        strIngredient6.style.display = "block";
        strIngredient7.textContent = data.meals[0].strIngredient7;
        strIngredient7.style.display = "block";
        strIngredient8.textContent = data.meals[0].strIngredient8;
        strIngredient8.style.display = "block";
        strIngredient9.textContent = data.meals[0].strIngredient9;
        strIngredient9.style.display = "block";
        strIngredient10.textContent = data.meals[0].strIngredient10;
        strIngredient10.style.display = "block";
        strIngredient11.textContent = data.meals[0].strIngredient11;
        strIngredient11.style.display = "block";
        strIngredient12.textContent = data.meals[0].strIngredient12;
        strIngredient12.style.display = "block";
        strIngredient13.textContent = data.meals[0].strIngredient13;
        strIngredient13.style.display = "block";
        strIngredient14.textContent = data.meals[0].strIngredient14;
        strIngredient14.style.display = "block";
        strIngredient15.textContent = data.meals[0].strIngredient15;
        strIngredient15.style.display = "block";
        strIngredient16.textContent = data.meals[0].strIngredient16;
        strIngredient16.style.display = "block";
        strIngredient17.textContent = data.meals[0].strIngredient17;
        strIngredient17.style.display = "block";
        strIngredient18.textContent = data.meals[0].strIngredient18;
        strIngredient18.style.display = "block";
        strIngredient19.textContent = data.meals[0].strIngredient19;
        strIngredient19.style.display = "block";
        strIngredient20.textContent = data.meals[0].strIngredient20;
        strIngredient20.style.display = "block";
    }
}

function displayCategories(categories) {
    const container = document.getElementById('category-container');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category.strCategory;
        button.id = "categoryBtn";
        button.addEventListener('click', () => {
            getRecipesFromCategory(category.strCategory);
        });
        container.appendChild(button);
    });
}

function displayRecipes(recipes) {
    const distription = document.getElementById("distription");
    distription.style.display = "none";

    const container = document.getElementById('recipe-container');
    container.innerHTML = '';
    container.style.display = "inline-flex";
    container.style.cursor = "pointer";

    recipes.forEach(recipe => {
        const div = document.createElement('div');
        
        const img = document.createElement('img');
        img.src = recipe.strMealThumb;
        img.id = "thumbnail";

        const span = document.createElement('span');
        span.innerText = recipe.strMeal;
        span.id = "recipe_name"

        const mealId = document.createElement('p');
        mealId.textContent = recipe.idMeal;

        div.appendChild(img);
        div.appendChild(span);

        div.addEventListener('click', () => {
            container.style.display = "none";
            getRecipeById(recipe.idMeal);
        });

        container.appendChild(div);
    });
}

getCategory();