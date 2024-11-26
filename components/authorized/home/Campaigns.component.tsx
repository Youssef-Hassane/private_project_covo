'use client';
import DataViewHome from '@/components/ui/data-view';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';

function Header() {
  return (
    <h3>Header</h3>
   )
}


export default function Campaigns() {
  const data = [
    {
      id: 'f230fh0g3',
      name: 'Tech',
      amount: 15000,
      logo: 'pi-microchip'
    },
    {
      id: 'asglkj21235',
      name: 'Commerce',
      amount: 11612,
      logo: 'pi-shopping-cart',
    },
    {
      id: '1351asdfgjl',
      name: 'Business',
      amount: 581235,
      logo: 'pi-briefcase',
    },
    {
      id: 'jasg61234',
      name: 'Fashion',
      amount: 622000,
      logo: 'pi-apple',
    },
    {
      id: 'jg235nba51',
      name: 'Entertainment',
      amount: 90012,
      logo: 'pi-play',
    },
  ]

  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>

            {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}

            <div className="flex flex-column sm:flex-row justify-between align-center xl:align-items-start flex-1 gap-4 ">
                <div className="flex flex-column align-items-center sm:align-items-start gap-3 ">
                    <div className="flex flex-col justify-center"><span className={`pi ${product.logo} text-align-bottom`}></span></div>
                    <div className="text-2xl font-bold text-900">{product.name}</div>
                    <div className="flex align-items-center gap-3">
                        <span className="flex align-items-center gap-2">
                            <span className="font-semibold">{product.description}</span>
                        </span>
                    </div>
                </div>
                <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 ">
                    <span className="text-2xl font-semibold">${product.amount}</span>
                </div>
            </div>
          </div>
      </div>
    );
  };

  const listTemplate = (items) => {
    let list = items.map((product, index) => {
          return itemTemplate(product, index);
      });

    return <div className="grid grid-nogutter">{list}</div>;
  }

  return (
    <section className="">
      <div>
        <DataViewHome value={data} listTemplate={listTemplate} className={`border-2`} layout='list' header={Header()}  />
      </div>
    </section>
  )
}