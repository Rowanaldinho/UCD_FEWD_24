// see https://medium.com/@rameshsainom/javascripts-dom-mutation-and-promises-advance-javascript-95da5258297c for more details on updating the DOM and promises
//

class PublicHolidaysDataTable {
  // properties
  #dataUrl="https://date.nager.at/api/v3/PublicHolidays/"; // base URL to REST API
  #country = "IE"; // default country
  #year = "2024"; // default year
  #title; //title text for component
  #data; //data object returned via fetch()
  #componentRoot; //DOM node for component;
  #columnNames; //an array of column names to display

  constructor(dataUrl, title) {
      this.#dataUrl = dataUrl;
      this.#title = title;
      this.#contentContainer = document.getElementById("content");
      this.loadData(); // load data using fetch and build the table
      this.#componentRoot.addEventListener("change", this.handleEvent.bind(this));
  }

  getContentContainer() {
      return this.#contentContainer;
  }

  render(){
      const capitaliseFirstLetter = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
      const tableData = this.#data;
      // get property names from first object in array
      const propNames = Object.getOwnPropertyNames(tableData[0]);
      console.log(propNames);
      let outputHtml = `<div class="table-container">
          <h2>${this.#title}</h2>
              <table class="blueTable">
                  <thead>
                      <tr>`;
      propNames.forEach((prop) => {
          outputHtml += `<th>${capitaliseFirstLetter(prop)}</th>`;
      });                
      outputHtml += `</tr></thead><tbody>`;

      for (let i in tableData) {
          outputHtml += '<tr>';
          propNames.forEach((prop) => {
              outputHtml += `<td>${tableData[i][prop]}</td>`;
          });                
          outputHtml += '</tr>';
      }
      outputHtml += `     </tbody>
          </table>
      </div>`;

      this.#contentContainer.innerHTML += outputHtml;
  }

  class PublicHolidaysDataTable {
    // properties
    #dataUrl = "https://date.nager.at/api/v3/PublicHolidays/"; // base URL to REST API
    #country = "IE"; // default country
    #year = "2024"; // default year
    #title; // title text for component
    #data; // data object returned via fetch()
    #componentRoot; // DOM node for component
    #columnNames; // an array of column names to display

    constructor(title) {
        this.#title = title;
        this.#componentRoot = document.getElementById("content");
        this.loadData(); // load data using fetch and build the table
        this.#componentRoot.addEventListener("change", this.handleEvent.bind(this));
    }

    getContentContainer() {
        return this.#componentRoot;
    }

    async loadData() {
        try {
            const response = await fetch(`${this.#dataUrl}${this.#year}/${this.#country}`);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            this.#data = await response.json();
            this.render(); // update the DOM
        } catch (error) {
            console.error(`Could not get data: ${error}`);
        }
    }

    render() {
        const capitaliseFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const tableData = this.#data;
        if (tableData.length === 0) return;

        // Get property names from the first object in the array
        const propNames = Object.getOwnPropertyNames(tableData[0]);

        let outputHtml = `<div class="table-container">
            <h2>${this.#title}</h2>
            <select id="country-select">
                <option value="IE">Ireland</option>
                <option value="US">USA</option>
                <!-- Add more options as needed -->
            </select>
            <select id="year-select">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <!-- Add more options as needed -->
            </select>
            <table class="blueTable">
                <thead>
                    <tr>`;

        propNames.forEach((prop) => {
            outputHtml += `<th>${capitaliseFirstLetter(prop)}</th>`;
        });

        outputHtml += `</tr></thead><tbody>`;

        for (let i in tableData) {
            outputHtml += '<tr>';
            propNames.forEach((prop) => {
                outputHtml += `<td>${tableData[i][prop]}</td>`;
            });
            outputHtml += '</tr>';
        }

        outputHtml += `</tbody></table></div>`;

        this.#componentRoot.innerHTML = outputHtml;
    }

    handleEvent(event) {
        const target = event.target;
        if (target.id === "country-select") {
            this.#country = target.value;
        } else if (target.id === "year-select") {
            this.#year = target.value;
        }
        this.loadData();
    }
}


  async loadData(){ 
      try{
          //after this line, our function will wait for the `fetch()` call to be settled
          //the `fetch()` call will either return a Response or throw an error 
          const response = await fetch(this.#dataUrl);
          if(!response.ok){
              throw new Error(`HTTPerror:${response.status}`);
          }
          //after this line, our function will wait for the`response.json()`call to be settled
          //the`response.json()`call will either return the parsed JSON object or throw an error 
          this.#data=await response.json();
          console.log(this.#data[0].name);
          this.render(); // update the DOM
      } catch(error){
          console.error(`Could not get product data:${error}`);
      }

  }

}

function init() {
  //holidays table
  let holidaysDataTable = null;
  try {
      // build table using an instance of DataTable class
      holidaysDataTable = new DataTable("https://date.nager.at/api/v3/PublicHolidays/2024/IE", "List of Public Holidays in Ireland for 2024");
  } catch(err) {
      console.error(err);
      holidaysDataTable.getContentContainer().innerHTML += '<h2>Error</h2><p>No product data to display.</p><p>' + err + '</p>';
  }
      //products table
  let productsDataTable = null;
  try {
      // build table using an instance of DataTable class
      productsDataTable = new DataTable("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json", "List of Products");
  } catch(err) {
      console.error(err);
      productsDataTable.getContentContainer().innerHTML += '<h2>Error</h2><p>No product data to display.</p><p>' + err + '</p>';
  }
}

window.addEventListener("load", (event => {
  init();
}));

function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Videos' : 'Video';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map(video =>
          <Video key={video.id} video={video} />
        )}
      </section>
    );
  }