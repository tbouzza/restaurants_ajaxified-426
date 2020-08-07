import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log('Hello from Stimulus')
    // When user click on the button
    // Display the value of restaurants.count in DB?
    // In a specific HTML Tag
    setInterval(this.refresh, 5000);


  }

  refresh = () => {
    console.log('5 secondes passed 🤩')
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.countTarget.innerText = data.restaurants.length
      });
  }
}
