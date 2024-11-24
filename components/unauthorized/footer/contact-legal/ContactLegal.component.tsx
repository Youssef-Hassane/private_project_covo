import Legal from './legal/Legal.component';
import Contact from './contact/Contact.component';

export default function ContactLegal(props) {
  return (
    <section className={ props.className } >
      <Legal />
      <Contact />
    </section>
  )
}