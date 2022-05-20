import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
function App(props) {
  useLayoutEffect(() => {
    let elem = document.querySelector("#main-scrollbar");
    let bodyScrollBar = Scrollbar.init(elem, {
      damping: 0.1,
      delegateTo: document,
    });

    bodyScrollBar.setPosition(0, 0);
    bodyScrollBar.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy(elem, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    const horizontalSections = gsap.utils.toArray("section.horizontal");

    horizontalSections.forEach(function (sec, i) {
      var thisPinWrap = sec.querySelector(".pin-wrap");
      var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

      var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? 0 : getToValue(),
        },
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            scroller: elem, // neccessary setting for smooth-scrollbar on body
            pinType: "transform", // neccessary setting for smooth-scrollbar on body
            start: "top top",
            end: () => "+=" + thisAnimWrap.scrollWidth,
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            anticipatePin: 0,
            scrub: true,
            //markers: true,
          },
        }
      );
    });

    // // This part is only necessary if you're using ScrollTrigger's markers:
    // if (document.querySelector(".gsap-marker-scroller-start")) {
    //   const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    //   bodyScrollBar.addListener(({ offset }) =>
    //     gsap.set(markers, { marginTop: -offset.y })
    //   );
    // }
    // // End section necessary only if you're using ScrollTrigger's markers
    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="main-scrollbar">
      <section className="blank">
        <h1>ScrollTrigger and smooth-scrollbar demo</h1>
        <p>...</p>
      </section>

      <section className="horizontal">
        <div className="pin-wrap" id="pinThis-0">
          <div className="animation-wrap to-right" id="animateThis-0">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>Nothing to see here...</h1>
        <p>...</p>
      </section>

      <section className="horizontal">
        <div className="pin-wrap" id="pinThis-1">
          <div className="animation-wrap to-left" id="animateThis-1">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>...little laggy, isn't it?</h1>
        <p>...</p>
      </section>

      <section className="horizontal">
        <div className="pin-wrap" id="pinThis-2">
          <div className="animation-wrap to-right" id="animateThis-2">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>...keep scrollin' scrollin' scrollin' scrollin'...</h1>
        <p>...</p>
      </section>

      <section className="horizontal">
        <div className="pin-wrap" id="pinThis-3">
          <div className="animation-wrap to-left" id="animateThis-3">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>...lorem ipsum...</h1>
        <p>...</p>
      </section>

      <section className="horizontal">
        <div className="pin-wrap" id="pinThis-4">
          <div className="animation-wrap to-left" id="animateThis-4">
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa
              ratione ex, dicta aliquam voluptates! Odio vitae eum nobis
              dignissimos sunt ipsum repellendus totam optio distinctio. Laborum
              suscipit quia aperiam.
            </div>
            <div className="item">
              Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
              impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
              laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
              quibusdam inventore!
            </div>
            <div className="item">
              Labore, unde amet! Alias delectus hic laboriosam et dolorum?
              Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et
              nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa
              unde perspiciatis minima.
            </div>
            <div className="item">
              Quaerat error dolorem aspernatur magni dicta ut consequuntur
              maxime tempore. Animi odio eos quod culpa nulla consectetur?
              Aperiam ipsam ducimus delectus reprehenderit unde, non laborum
              voluptate laboriosam, officiis at ea!
            </div>
            <div className="item">
              Rem nobis facere provident magni minima iste commodi aliquam
              harum? Facere error quos cumque perspiciatis voluptatibus deserunt
              maiores, fugiat sunt sit ab inventore natus saepe, eveniet alias
              ipsam placeat voluptas!
            </div>
            <div className="item">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
              Quis excepturi voluptates atque dolorum minus eligendi! Omnis
              minima magni recusandae ex dignissimos.
            </div>
            <div className="item">
              Magnam eveniet inventore assumenda ullam. At saepe voluptatibus
              sed dicta reiciendis, excepturi nisi perferendis, accusantium est
              suscipit tempora dolorum praesentium cupiditate doloribus non?
              Sint numquam recusandae dolore quis esse ea?
            </div>
            <div className="item">
              Temporibus cum dolor minima consequatur esse veritatis enim nemo
              cupiditate laborum doloribus reiciendis perferendis, quas fugit
              earum rerum, at beatae alias amet aspernatur dolorem dolore error
              commodi. Perspiciatis, reiciendis amet!
            </div>
            <div className="item">
              Vitae, tenetur beatae error corrupti odit expedita quisquam
              commodi ea aspernatur aliquid, eveniet reprehenderit sequi,
              similique maiores praesentium quam! Optio tenetur saepe unde
              voluptatem minus tempora maxime temporibus ducimus ullam!
            </div>
          </div>
        </div>
      </section>

      <section className="blank">
        <h1>...what dou you think?</h1>
        <p>...</p>
      </section>
    </div>
  );
}

export default App;
