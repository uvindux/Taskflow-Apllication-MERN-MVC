import React from 'react';
import './UserTable.css';

function UsersTable({ rows, selectedUser, DeleteUSer }) {
      return (
            <div className="table-wrapper">
                  <div className="table-header">
                        <h2 className="table-title">Task List</h2>
                        <div className="table-count">
                              <span className="count-badge">{rows?.length || 0}</span>
                              <span className="count-text">Total Tasks</span>
                        </div>
                  </div>

                  <div className="table-container">
                        {rows && rows.length > 0 ? (
                              <table className="users-table">
                                    <thead>
                                          <tr>
                                                <th className="table-head-cell">
                                                      <div className="head-content">
                                                            <svg className="head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                            </svg>
                                                            ID
                                                      </div>
                                                </th>
                                                <th className="table-head-cell">
                                                      <div className="head-content">
                                                            <svg className="head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            Name
                                                      </div>
                                                </th>
                                                <th className="table-head-cell action-column">
                                                      <div className="head-content">
                                                            <svg className="head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                            </svg>
                                                            Actions
                                                      </div>
                                                </th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {rows.map((row, index) => (
                                                <tr key={row.id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                                                      <td className="table-cell">
                                                            <span className="cell-id">{row.id}</span>
                                                      </td>
                                                      <td className="table-cell">
                                                            <div className="user-info">
                                                                  <div className="user-avatar">
                                                                        {row.name.charAt(0).toUpperCase()}
                                                                  </div>
                                                                  <span className="user-name">{row.name}</span>
                                                            </div>
                                                      </td>
                                                      <td className="table-cell action-cell">
                                                            <div className="action-buttons">
                                                                  <button
                                                                        className="btn-action btn-update"
                                                                        onClick={() => selectedUser({ id: row.id, name: row.name })}
                                                                        aria-label="Update user"
                                                                  >
                                                                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                        Update
                                                                  </button>
                                                                  <button
                                                                        className="btn-action btn-delete"
                                                                        onClick={() => DeleteUSer({ id: row.id })}
                                                                        aria-label="Delete user"
                                                                  >
                                                                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                        </svg>
                                                                        Delete
                                                                  </button>
                                                            </div>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        ) : (
                              <div className="empty-state">
                                    <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                    <h3 className="empty-title">No Users Found</h3>
                                    <p className="empty-text">Start by adding your first user above.</p>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default UsersTable;