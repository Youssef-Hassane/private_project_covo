export default function Legal(props) {

  const legalObjectsArray = [
    {
      id: 1,
      content: 'Terms and Conditions',
      href: 'https://google.com',
    },
    {
      id: 2,
      content: 'Privacy Policy',
      href: 'https://google.com',
    },
    {
      id: 3,
      content: 'Refund Policy',
      href: 'https://google.com',
    },
    {
      id: 4,
      content: 'Accessibility Statement',
      href: 'https://google.com',
    }
  ]

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