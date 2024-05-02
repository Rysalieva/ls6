import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmitHandler = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <input {...register("name", { required: true })} placeholder="Name" />
                {errors.name && <span>Введите имя</span>}
            </div>
            <div>
                <input {...register("username", { required: true })} placeholder="Username" />
                {errors.username && <span>Введите имя пользователя</span>}
            </div>
            <div>
                <input {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>Введите почту</span>}
            </div>
            <div>
                <input {...register("phone", { required: true })} placeholder="Phone" />
                {errors.phone && <span>Введите номер</span>}
            </div>
            <div>
                <input {...register("website")} placeholder="Website" />
            </div>
            <button type="submit">Далее</button>
        </form>
    );
};

export default UserForm;
