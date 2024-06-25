
// https://api.unsplash.com/photos/random?client_id=_UFwF3apRwmmRb3KuLq6YpTPn4K9pGsKkErwq2RZyIU

const myContainer = document.querySelector(".container")

function getRandomPostsInfo() {

    fetch("https://jsonplaceholder.typicode.com/posts?page=1")
        .then(function (result) {
            return result.json()
        })
        .then(function (output) {
            output.map(function (i) {
                const myH2 = document.createElement("h2")
                myH2.textContent = i.title

                const myPara = document.createElement("p")
                myPara.textContent = i.body

                myContainer.append(myH2)
                myContainer.append(myPara)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    window.addEventListener("scroll", function (info) {
        let myClientHeight = info.target.documentElement.clientHeight
        let myScrollHeight = info.target.documentElement.scrollHeight
        let myScrollTop = info.target.documentElement.scrollTop

        if (myClientHeight + myScrollTop + 1 > myScrollHeight) {
            // console.log("Hi");
            getRandomPostsInfo()
        }
    })
}

getRandomPostsInfo()