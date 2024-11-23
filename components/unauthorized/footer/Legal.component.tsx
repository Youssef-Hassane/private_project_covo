export default function Legal(props) {

  return (
    <section className={props.className}>
      <h3 className="text-xl font-semibold">Legal</h3>
      <nav className="px-[0.5em] py-[1em]">
        <ul>
          <li><a target="active" href="https://google.com">Terms and Conditions</a></li>
          <li><a target="active" href="https://google.com">Privacy Policy</a></li>
          <li><a target="active" href="https://google.com">Refund Policy</a></li>
          <li><a target="active" href="https://google.com">Accessibility Statement</a></li>
        </ul>
    </nav>
    </section>
  );
}