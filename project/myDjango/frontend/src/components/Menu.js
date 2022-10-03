import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import logo from './logo.svg'
import { Routes, Route } from 'react-router-dom';
import Tables from './Tables';
import Reports from './Reports';
import Home from './Home';


class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelec
          color="dark"
          dark
          expand="md"
          fixed="top"
        >
          <NavbarBrand href="/home">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            Учет абонентов АТС
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/tables">
                  Таблицы
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Администратор
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/district/" target="_blank">
                    Районы
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/streets/" target="_blank">
                    Улицы
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/lgoty/" target="_blank">
                    Льготы
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/employees/" target="_blank">
                    Сотрудники
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/paired_numbers/" target="_blank">
                    Спаренные номера
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/phone_numbers/" target="_blank">
                    Телефоны
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/owners/" target="_blank">
                    Владельцы
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/installation/" target="_blank">
                    Установка
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/admin/webApp/payment/" target="_blank">
                    Оплата
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="http://127.0.0.1:8000/allrequests" target="_blank">
                  Запросы
                  </DropdownItem>
                  <DropdownItem href="http://127.0.0.1:8000/allreports" target="_blank">
                  Отчеты
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    );
  }
}

export default Menu;