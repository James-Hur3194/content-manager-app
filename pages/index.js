import Footer from "components/Footer";
import Layout from "components/Layout";
import Newsletter from "components/Newsletter";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import { useEffect } from "react";

// CORS

function Home({ resources }) {

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/resources");
  // }, [])

  return (
    <>
      <Layout>
        <ResourceHighlight
          resources={resources.slice(0, 2)}
        />
        <Newsletter />
        <ResourceList
          resources={resources.slice(0, 2)}
        />

        <Footer />
      </Layout>








      {/* <script>
      document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }

      });
    </script> */}

    </>
  )
}

// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  //const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}

// // is called at the build time, and it's called only once

// export async function getStaticProps() {

//   // const resData = await fetch("http://localhost:3000/api/resources");
//   // const data = await resData.json();

//   console.log("Calling getStaticProps");

//   return {
//     props: {
//       resources: data
//     }
//   }
// }

export default Home;