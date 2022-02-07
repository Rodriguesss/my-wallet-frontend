import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ToastContainer } from 'react-toastify'

import { ResetStyle } from "../css/reset"
import { GlobalStyle } from "../css/style"

import { AuthProvider } from "../context/AuthContext"

import Container from '../components/generics/Container'
import Login from "./pages/Index/Login"
import Register from "./pages/Index/Register"
import Home from "./pages/Home"
import MonetaryOperation from "./pages/MonetaryOperation"

export default function App() {
	return (
		<AuthProvider>
			<ResetStyle />
			<GlobalStyle />
			<ToastContainer />
			<Container>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/home" element={<Home />} />
						<Route path="/monetary_operation" element={<MonetaryOperation />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</AuthProvider>
	)
}