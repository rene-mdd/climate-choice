import { ReactElement, useState } from 'react';
import { Contacts } from "../models/model"

interface Props {
    contact: Contacts[]
}

function Dropdown(props: Props): ReactElement {
        console.log(props)
        const contacts: Contacts[] = [...props.contact];
        console.log(contacts)
        const [showMenu, setMenu] = useState<boolean>(false);

    return (
        <div>
            <button type="button" onClick={() => setMenu(prevState => !prevState)}>Show menu</button>
            {showMenu ? (
              contacts.map(({ name, email, image, phone }: Contacts, index: number) => 
                <div key={email}>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=25" alt="customer" />
                  <p>{name}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                </div>
              )
            ) : (null)}
        </div>
    );
}

export default Dropdown;
