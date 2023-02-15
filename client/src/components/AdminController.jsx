import React from 'react';
import Modal from 'react-modal';
import { useApi } from '../hooks/use-api';

export default function AdminController() {

    return (
        <div className='AdminController'>
            <button type="button" data-modal = "modal-add">Add</button>
            <button data-modal = "modal-edit">Edit</button>
            <button data-modal = "modal-get">View</button>
            <button data-modal = "modal-delete">Delete</button>
        </div>
    );
}