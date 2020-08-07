import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log('Hello from Stimulus')
    // Display the number of restaurants in DB
    // In a specific part of the page

    setInterval(this.refresh, 5000);
    // 👆 Will call refresh every 5 secs.
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
