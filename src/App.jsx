import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: ''
  })
  const [filterCategory, setFilterCategory] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId !== null) {
      setItems(items.map(item => 
        item.id === editingId ? { ...formData, id: editingId } : item
      ))
      setEditingId(null)
    } else {
      setItems([...items, { ...formData, id: Date.now() }])
    }
    setFormData({ name: '', category: '', quantity: '', price: '' })
  }

  const handleEdit = (item) => {
    setFormData(item)
    setEditingId(item.id)
  }

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleSort = () => {
    setItems([...items].sort((a, b) => a.quantity - b.quantity))
  }

  const filteredItems = items.filter(item => 
    filterCategory ? item.category.toLowerCase() === filterCategory.toLowerCase() : true
  )

  const categories = [...new Set(items.map(item => item.category))]

  return (
    <div className="inventory-app">
      <h1>Inventory Management</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
          required
        />
        <button type="submit">{editingId !== null ? 'Update' : 'Add'} Item</button>
      </form>

      <div className="controls">
        <select 
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={handleSort}>Sort by Quantity</button>
      </div>

      <table>
        <thead>
          <tr className='txt-col'> 
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id} className={item.quantity < 10 ? 'low-stock' : ''}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App