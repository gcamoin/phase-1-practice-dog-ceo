console.log('%c HI', 'color: firebrick')
let dogBreedsData = []


document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response){
        console.log(response)
        return response.json();
      })
      .then(dogs => addDogImages(dogs))
      


 function addDogImages(dogs) {
  // console.log(dog)
    dogs.message.forEach((dog) => {
    const img = document.createElement('img')
    const dogContainer = document.getElementById('dog-image-container')
    img.src = dog
    dogContainer.append(img)
 })
    }

    // Adding Dog Breeds

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => {
        
        dogBreedsData = Object.keys(breeds.message)
        
        addDogBreeds(dogBreedsData)


    })
    

    function addDogBreeds(breeds) {
        
        
        dogBreedsData.forEach((breed) => {
            console.log(breed)
            const dogBreeds = document.getElementById('dog-breeds')
            let breedsLi = document.createElement('li')
            breedsLi.innerText = breed
        dogBreeds.appendChild(breedsLi)

    })
}

const dropDown = document.getElementById('breed-dropdown')
dropDown.addEventListener('change', (e) => {
    let dataDogs = dogBreedsData.filter((breed) => {
        console.log(breed.charAt(0))
        return breed.charAt(0) === e.target.value
        
    })
    
    function removeLast() {
        let dogContainer = document.getElementById('dog-breeds')
        let dogContainerTwo = dogContainer.lastChild
        while(dogContainerTwo) {
            dogContainer.removeChild(dogContainerTwo)
            dogContainerTwo = document.getElementById('dog-breeds').lastChild
        }
        //grab the last element
        //while last element exists remove element within loop
    }
    removeLast();
    
    dataDogs.forEach((breed) => {
        const sortedBreeds = document.getElementById('dog-breeds')
        let filteredBreedsLi = document.createElement('li')
        console.log(filteredBreedsLi)
        filteredBreedsLi.innerText = breed
        sortedBreeds.appendChild(filteredBreedsLi)
        filteredBreedsLi.addEventListener('click', () => {
            filteredBreedsLi.style.color = 'red'
        })
        
    })
    
})
    

      

})


