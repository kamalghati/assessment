import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

      useEffect(() => {
          fetchUsers();
            }, []);

              const fetchUsers = async () => {
                  try {
                        const response = await fetch('https://reqres.in/api/users?page=2');
                              const data = await response.json();
                                    setUsers(data.data);
                                        } catch (error) {
                                              console.log('Error fetching users:', error);
                                                  }
                                                    };

                                                      const handleSearch = (e) => {
                                                          setSearchTerm(e.target.value);
                                                            };

                                                              const filteredUsers = users.filter((user) => {
                                                                  return user.first_name.toLowerCase().includes(searchTerm.toLowerCase());
                                                                    });

                                                                      return (
                                                                          <div>
                                                                                <input
                                                                                        type="text"
                                                                                                placeholder="Search by first name"
                                                                                                        value={searchTerm}
                                                                                                                onChange={handleSearch}
                                                                                                                      />
                                                                                                                            <div>
                                                                                                                                    {filteredUsers.map((user) => (
                                                                                                                                              <div key={user.id}>
                                                                                                                                                          <img src={user.avatar} alt={user.first_name} />
                                                                                                                                                                      <p>ID: {user.id}</p>
                                                                                                                                                                                  <p>Name: {user.first_name}</p>
                                                                                                                                                                                            </div>
                                                                                                                                                                                                    ))}
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                );
                                                                                                                                                                                                                };

                                                                                                                                                                                                                export default App;
                                                                                                                                                                                                                