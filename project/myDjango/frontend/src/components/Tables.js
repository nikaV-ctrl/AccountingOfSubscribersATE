import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import classnames from 'classnames';
import DistrictIndex from "./districts/DistrictIndex";
import StreetsIndex from './streets/StreetsIndex';
import LgotyIndex from './lgoty/LgotyIndex';
import EmployeesIndex from './employees/EmployeesIndex';
import PhonenumbersIndex from './phonenumbers/PhonenumbersIndex';
import PairednumbersIndex from './pairednumbers/PairednumbersIndex';
import OwnersIndex from './owners/OwnersIndex';
import InstallationIndex from "./installation/InstallationIndex";
import PaymentIndex from "./payment/PaymentIndex";


function Header() {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div>
            <br></br>
            <br></br>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Районы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Улицы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Льготы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '4'
                        })}
                        onClick={() => { toggle('4'); }}
                    >
                        Сотрудники
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '5'
                        })}
                        onClick={() => { toggle('5'); }}
                    >
                        Телефоны
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '6'
                        })}
                        onClick={() => { toggle('6'); }}
                    >
                        Спаренные номера
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '7'
                        })}
                        onClick={() => { toggle('7'); }}
                    >
                        Владельцы
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '8'
                        })}
                        onClick={() => { toggle('8'); }}
                    >
                        Установка
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '9'
                        })}
                        onClick={() => { toggle('9'); }}
                    >
                        Оплата
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <DistrictIndex />
                </TabPane>
                <TabPane tabId="2">
                    <StreetsIndex />
                </TabPane>
                <TabPane tabId="3">
                    <LgotyIndex />
                </TabPane>
                <TabPane tabId="4">
                    <EmployeesIndex />
                </TabPane>
                <TabPane tabId="5">
                    <PhonenumbersIndex />
                </TabPane>
                <TabPane tabId="6">
                    <PairednumbersIndex />
                </TabPane>
                <TabPane tabId="7">
                    <OwnersIndex />
                </TabPane>
                <TabPane tabId="8">
                    <InstallationIndex />
                </TabPane>
                <TabPane tabId="9">
                    <PaymentIndex />
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Header;