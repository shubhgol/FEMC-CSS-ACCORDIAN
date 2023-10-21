import "./styles.css";

export default function App() {
  const toggleHandler = (e) => {
    if (e.target.tagName === "SPAN" && e.target.id) {
      const id = e.target.id;
      const parentEl = document.getElementById(`${id}-par`);
      if (parentEl) {
        parentEl.classList.toggle("open");
      }
    }
  };
  return (
    <div className="accordian" onClick={toggleHandler}>
      <div className="accordianItem" id="para01-par">
        <span>01</span>
        <h4>Where are these chairs assembled?</h4>
        <span className="arrowIcon" id="para01"></span>
        <div className="hidden-box">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            alias sequi. Rerum officia earum voluptas, eius illo reprehenderit
            accusamus veritatis expedita et cumque, nemo vitae molestias aperiam
            totam, reiciendis distinctio.
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
          </ul>
        </div>
      </div>
      <div className="accordianItem" id="para02-par">
        <span>02</span>
        <h4>Where are these chairs assembled?</h4>
        <span className="arrowIcon" id="para02"></span>
        <div className="hidden-box">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            alias sequi. Rerum officia earum voluptas, eius illo reprehenderit
            accusamus veritatis expedita et cumque, nemo vitae molestias aperiam
            totam, reiciendis distinctio.
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
          </ul>
        </div>
      </div>
      <div className="accordianItem" id="para03-par">
        <span>03</span>
        <h4>Where are these chairs assembled?</h4>
        <span className="arrowIcon" id="para03"></span>
        <div className="hidden-box">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            alias sequi. Rerum officia earum voluptas, eius illo reprehenderit
            accusamus veritatis expedita et cumque, nemo vitae molestias aperiam
            totam, reiciendis distinctio.
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>
              Quasi accusamus corporis totam tempora suscipit ab obcaecati.
            </li>
            <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
